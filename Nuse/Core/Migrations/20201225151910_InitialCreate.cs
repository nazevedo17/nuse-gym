using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Nuse.Core.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Active = table.Column<bool>(type: "bit", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(128)", maxLength: 128, nullable: false),
                    Gender = table.Column<byte>(type: "tinyint", nullable: false),
                    BirthDate = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    CreatedOn = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    CreatedBy = table.Column<long>(type: "bigint", nullable: true),
                    ChangedOn = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    ChangedBy = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Measurements",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerId = table.Column<long>(type: "bigint", nullable: false),
                    MeasurementDate = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    BMI = table.Column<double>(type: "float", nullable: true),
                    Height = table.Column<double>(type: "float", nullable: true),
                    Weight = table.Column<double>(type: "float", nullable: true),
                    Age = table.Column<double>(type: "float", nullable: true),
                    Gender = table.Column<byte>(type: "tinyint", nullable: true),
                    RightForearm = table.Column<double>(type: "float", nullable: true),
                    LeftForearm = table.Column<double>(type: "float", nullable: true),
                    RightUpperArm = table.Column<double>(type: "float", nullable: true),
                    LeftUpperArm = table.Column<double>(type: "float", nullable: true),
                    Chest = table.Column<double>(type: "float", nullable: true),
                    Bust = table.Column<double>(type: "float", nullable: true),
                    Midriff = table.Column<double>(type: "float", nullable: true),
                    Waist = table.Column<double>(type: "float", nullable: true),
                    Abdomen = table.Column<double>(type: "float", nullable: true),
                    Hips = table.Column<double>(type: "float", nullable: true),
                    Buttocks = table.Column<double>(type: "float", nullable: true),
                    RightUpperThigh = table.Column<double>(type: "float", nullable: true),
                    LeftUpperThigh = table.Column<double>(type: "float", nullable: true),
                    RightMidThigh = table.Column<double>(type: "float", nullable: true),
                    LeftMidThigh = table.Column<double>(type: "float", nullable: true),
                    RightLowerThigh = table.Column<double>(type: "float", nullable: true),
                    LeftLowerThigh = table.Column<double>(type: "float", nullable: true),
                    RightKnee = table.Column<double>(type: "float", nullable: true),
                    LeftKnee = table.Column<double>(type: "float", nullable: true),
                    RightCalf = table.Column<double>(type: "float", nullable: true),
                    LeftCalf = table.Column<double>(type: "float", nullable: true),
                    RightAnkle = table.Column<double>(type: "float", nullable: true),
                    LeftAnkle = table.Column<double>(type: "float", nullable: true),
                    CreatedOn = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    CreatedBy = table.Column<long>(type: "bigint", nullable: true),
                    ChangedOn = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    ChangedBy = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Measurements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Measurements_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Active = table.Column<bool>(type: "bit", nullable: false),
                    Username = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: false),
                    CreatedOn = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    CreatedBy = table.Column<long>(type: "bigint", nullable: true),
                    ChangedOn = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    ChangedBy = table.Column<long>(type: "bigint", nullable: true),
                    CustomerId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Logins",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LoginDate = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    Success = table.Column<bool>(type: "bit", nullable: false),
                    UserId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Logins", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Logins_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Customers",
                columns: new[] { "Id", "Active", "Address", "BirthDate", "ChangedBy", "ChangedOn", "CreatedBy", "CreatedOn", "Email", "FirstName", "Gender", "LastName", "PhoneNumber" },
                values: new object[] { 1L, false, "", new DateTimeOffset(new DateTime(1999, 2, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), null, new DateTimeOffset(new DateTime(2020, 12, 25, 15, 19, 10, 261, DateTimeKind.Unspecified).AddTicks(7129), new TimeSpan(0, 0, 0, 0, 0)), null, new DateTimeOffset(new DateTime(2020, 12, 25, 15, 19, 10, 259, DateTimeKind.Unspecified).AddTicks(7452), new TimeSpan(0, 0, 0, 0, 0)), "a18478@alunos.ipca.pt", "Sérgio Miguel", (byte)1, "Machado Oliveira", "" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Active", "ChangedBy", "ChangedOn", "CreatedBy", "CreatedOn", "CustomerId", "Password", "Username" },
                values: new object[] { 1L, false, null, new DateTimeOffset(new DateTime(2020, 12, 25, 15, 19, 10, 262, DateTimeKind.Unspecified).AddTicks(6965), new TimeSpan(0, 0, 0, 0, 0)), null, new DateTimeOffset(new DateTime(2020, 12, 25, 15, 19, 10, 262, DateTimeKind.Unspecified).AddTicks(6686), new TimeSpan(0, 0, 0, 0, 0)), 1L, "9999", "smo" });

            migrationBuilder.CreateIndex(
                name: "IX_Customers_Email",
                table: "Customers",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Logins_UserId",
                table: "Logins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Measurements_CustomerId",
                table: "Measurements",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_CustomerId",
                table: "Users",
                column: "CustomerId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_Username",
                table: "Users",
                column: "Username",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Logins");

            migrationBuilder.DropTable(
                name: "Measurements");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}
