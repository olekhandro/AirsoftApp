using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AirsoftTeamApp.DAL.Migrations
{
    public partial class Games : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "EndTime",
                table: "Events",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "GameId",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Place",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "StartTime",
                table: "Events",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                name: "Games",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Link = table.Column<string>(nullable: true),
                    GameType = table.Column<int>(nullable: false),
                    Cost = table.Column<decimal>(nullable: false),
                    Organizators = table.Column<string>(nullable: true),
                    OrganizatorsLink = table.Column<string>(nullable: true),
                    EventId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Games", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Games_Events_EventId",
                        column: x => x.EventId,
                        principalTable: "Events",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Events_GameId",
                table: "Events",
                column: "GameId");

            migrationBuilder.CreateIndex(
                name: "IX_Games_EventId",
                table: "Games",
                column: "EventId");

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Games_GameId",
                table: "Events",
                column: "GameId",
                principalTable: "Games",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Events_Games_GameId",
                table: "Events");

            migrationBuilder.DropTable(
                name: "Games");

            migrationBuilder.DropIndex(
                name: "IX_Events_GameId",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "EndTime",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "GameId",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "Place",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "StartTime",
                table: "Events");
        }
    }
}
