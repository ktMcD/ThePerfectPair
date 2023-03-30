using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ThePerfectPair.Migrations
{
    public partial class fixmaxlength : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Drinks_Categories_CategoryId",
                table: "Drinks");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Drinks_DrinkId",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Foods_FoodId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_DrinkId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_FoodId",
                table: "Ratings");

            migrationBuilder.AlterColumn<string>(
                name: "linkUrl",
                table: "Foods",
                type: "nvarchar(1000)",
                maxLength: 1000,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "imageUrl",
                table: "Foods",
                type: "nvarchar(1000)",
                maxLength: 1000,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Drinks",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Drinks_Categories_CategoryId",
                table: "Drinks",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Drinks_Categories_CategoryId",
                table: "Drinks");

            migrationBuilder.AlterColumn<string>(
                name: "linkUrl",
                table: "Foods",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(1000)",
                oldMaxLength: 1000);

            migrationBuilder.AlterColumn<string>(
                name: "imageUrl",
                table: "Foods",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(1000)",
                oldMaxLength: 1000);

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Drinks",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_DrinkId",
                table: "Ratings",
                column: "DrinkId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_FoodId",
                table: "Ratings",
                column: "FoodId");

            migrationBuilder.AddForeignKey(
                name: "FK_Drinks_Categories_CategoryId",
                table: "Drinks",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Drinks_DrinkId",
                table: "Ratings",
                column: "DrinkId",
                principalTable: "Drinks",
                principalColumn: "DrinkId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Foods_FoodId",
                table: "Ratings",
                column: "FoodId",
                principalTable: "Foods",
                principalColumn: "FoodId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
