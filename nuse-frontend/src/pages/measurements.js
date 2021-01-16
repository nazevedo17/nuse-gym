import { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'src/i18n';

import { Box } from '@material-ui/core';

import PageTitle from 'src/components/util/PageTitle';
import Layout from 'src/components/layout';
import FindMeasurement from 'src/components/pages/measurements/FindMeasurement';
import MeasurementsTable from 'src/components/pages/measurements/MeasurementsTable';

const Measurements = ({ t }) => {
  const [showAddMeasurement, setShowAddMeasurement] = useState(false);
  const [showFindMeasurement, setShowFindMeasurement] = useState(false);
  const [measurements, setMeasurements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleMeasurementModal = () => {
    setShowAddMeasurement((curr) => !curr);
  };

  const handleFindMeasurementModal = () => {
    setShowFindMeasurement((curr) => !curr);
  };

  const handleAddMeasurement = (body) => {
    // setLoading(true);
    // addCustomer(body)
    //   .then((res) => {
    //     const { data } = res;
    //     setAllCustomers((curr) => [...curr, data.customer]);
    //     handleCustomerModal();
    //   })
    //   .catch(() => setError(true))
    //   .then(() => setLoading(false));
  };

  return (
    <>
      <PageTitle title={t('pages.measurements')} />
      <Layout t={t} handleAdd={handleMeasurementModal} handleFind={handleFindMeasurementModal}>
        <section>
          <Box component="article" p={2}>
            {measurements.length > 0 && (
              <MeasurementsTable t={t} measurements={measurements} loading={loading} setLoading={setLoading} />
            )}
            {/* {showAddMeasurement && (
              <HandleMeasurement t={t} loading={loading} error={error} handleMeasurementSubmit={handleAddMeasurement} />
            )} */}

            {showFindMeasurement && (
              <FindMeasurement t={t} handleModal={handleFindMeasurementModal} setMeasurements={setMeasurements} />
            )}
          </Box>
        </section>
      </Layout>
    </>
  );
};

Measurements.getInitialProps = async () => ({
  namespacesRequired: ['common', 'measurements'],
});

Measurements.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Measurements);
