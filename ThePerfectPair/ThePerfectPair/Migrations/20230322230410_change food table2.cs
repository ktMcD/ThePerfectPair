using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ThePerfectPair.Migrations
{
    public partial class changefoodtable2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "spoonacularId",
                table: "Foods",
                newName: "spoonacular");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "spoonacular",
                table: "Foods",
                newName: "spoonacularId");
        }
    }
}
