using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ThePerfectPair.DAL;
using ThePerfectPair.Models;

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
        FoodId = foodToAdd.FoodId,
        Name = foodToAdd.Name,
        Description = foodToAdd.Description
      };
      return repo.AddFood(foodToAdd);
    
    }

  }
}
