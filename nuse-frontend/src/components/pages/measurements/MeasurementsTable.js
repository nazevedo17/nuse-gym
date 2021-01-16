import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { Edit, Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { XGrid, useApiRef } from '@material-ui/x-grid';

import ModalConfirm from '../../util/ModalConfirm';
import HandleMeasurement from './HandleMeasurement';

import { editMeasurements, deleteMeasurements } from 'src/api/api';

const useStyles = makeStyles((theme) => ({
  editIcon: {
    margin: 'auto',
    '&:hover': {
      color: theme.palette.secondary.main,
      cursor: 'pointer',
    },
  },
  table: {
    height: 630,
    width: '100%',
    '& .MuiDataGrid-mainGridContainer > div:nth-of-type(1)': {
      display: 'none',
    },
  },
}));

const MeasurementsTable = ({ t, measurements, loading, setLoading }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [measurementData, setMeasurementData] = useState(null);
  const [showEditMeasurement, setShowEditMeasurement] = useState(false);
  const [error, setError] = useState(false);
  const [allMeasurements, setAllMeasurements] = useState(measurements);

  const apiRef = useApiRef();

  const handleEditModal = (row) => {
    setMeasurementData(row);
    setShowEditMeasurement((curr) => !curr);
  };

  const handleModal = (row) => {
    setMeasurementData(row);
    setShowModal((curr) => !curr);
  };

  const handleDelete = () => {
    setLoading(true);
    const body = { id: measurementData.id };
    deleteMeasurements(body)
      .then(() => {
        deleteMeasurement();
        handleModal(null);
      })
      .catch(() => setError(true))
      .then(() => {
        setLoading(false);
      });
  };

  const handleEditMeasurement = (body) => {
    setLoading(true);
    editMeasurements(body)
      .then((res) => {
        const { data } = res;
        updateMeasurements(data.measurement);
        handleEditModal(null);
      })
      .catch(() => setError(true))
      .then(() => {
        setLoading(false);
      });
  };

  const updateMeasurements = (measurement) => {
    const newMeasurements = [];

    for (var i in apiRef.current.state.rows.idRowsLookup)
      newMeasurements.push(apiRef.current.state.rows.idRowsLookup[i]);

    const measurementIndex = newMeasurements.findIndex((measurement) => measurement.id == measurementData.id);
    newMeasurements[measurementIndex] = measurement;
    apiRef.current.updateRows(newMeasurements);
  };

  const deleteMeasurement = () => {
    let newMeasurements = [];

    for (var i in apiRef.current.state.rows.idRowsLookup)
      newMeasurements.push(apiRef.current.state.rows.idRowsLookup[i]);

    newMeasurements = newMeasurements.filter((item) => item.id !== measurementData.id);

    setAllMeasurements(newMeasurements);
    apiRef.current.updateRows(newMeasurements);
  };

  const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'customerId', headerName: t('measurements:table.customerId'), hide: true },
    { field: 'bmi', headerName: t('measurements:table.bmi'), width: 195 },
    {
      field: 'measurementDate',
      headerName: t('measurements:table.measurementDate'),
      renderCell: (params) => {
        const date = new Date(params.row.measurementDate);
        return date.toLocaleDateString();
      },
      width: 225,
    },
    { field: 'age', headerName: t('measurements:table.age'), width: 195 },
    { field: 'height', headerName: t('measurements:table.height'), width: 195 },
    { field: 'weight', headerName: t('measurements:table.weight'), width: 195 },
    {
      field: 'edit',
      headerName: t('edit'),
      renderCell: (params) => {
        return <Edit onClick={() => handleEditModal(params.row)} className={classes.editIcon} />;
      },
    },
    {
      field: 'delete',
      headerName: t('measurements:table.delete'),
      renderCell: (params) => {
        return <Delete onClick={() => handleModal(params.row)} className={classes.editIcon} />;
      },
    },
  ];

  useEffect(() => {
    apiRef.current.updateRows(measurements);
  }, [measurements]);

  return (
    <>
      {showEditMeasurement && (
        <HandleMeasurement
          t={t}
          loading={loading}
          error={error}
          handleMeasurementSubmit={handleEditMeasurement}
          handleModal={() => handleEditModal(null)}
          measurementData={measurementData}
        />
      )}
      <div className={classes.table}>
        <XGrid
          rows={allMeasurements}
          columns={columns}
          pageSize={10}
          loading={loading}
          apiRef={apiRef}
          disableSelectionOnClick
          // onPageChange={(pageChange) => console.log(pageChange)}
          pagination
        />
        {showModal && (
          <ModalConfirm
            t={t}
            handleModal={handleModal}
            handleAction={handleDelete}
            title="measurements:disable.title"
            description="measurements:disable.description"
          />
        )}
      </div>
    </>
  );
};

MeasurementsTable.propTypes = {
  t: PropTypes.func.isRequired,
  measurementsData: PropTypes.array,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default MeasurementsTable;
