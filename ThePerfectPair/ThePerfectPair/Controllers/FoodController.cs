using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ThePerfectPair.DAL;
using ThePerfectPair.Models;
using System.Net;

namespace ThePerfectPair.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FoodController : ControllerBase
  {
    FoodRepository repo =new FoodRepository();

    [HttpGet()]
    public List<Food> GetAllFoods()
    {
      return repo.GetAllFoods();
    }

    [HttpPost("addfood")]
    public Food addFood(Food foodToAdd)
    {
      Food newFood = new Food
      {
        //FoodId = foodToAdd.FoodId,
        Title = foodToAdd.Title,
        spoonacular = foodToAdd.spoonacular,
        imageUrl = foodToAdd.imageUrl,
        linkUrl = foodToAdd.linkUrl
      };
      return repo.AddFood(foodToAdd);
    
    }

    [HttpGet("getMostRecentFood")]
    public Food getFood()
    {
      return repo.GetLatestFood();
    }
  }
}
