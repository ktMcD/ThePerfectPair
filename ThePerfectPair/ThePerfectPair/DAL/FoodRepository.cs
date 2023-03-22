using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ThePerfectPair.Models;

namespace ThePerfectPair.DAL
{
  public class FoodRepository
  {

    private PerfectPairContext _dbContext = new PerfectPairContext();

    public List<Food> GetAllFoods()
    {
      return _dbContext.Foods.ToList();
    }

    public bool AddFood(Food food)
    {

      if (FindById(food.spoonacularId) == null)
      {
        _dbContext.Foods.Add(food);
        _dbContext.SaveChanges();
        return true;
      }
      return false;
    }
    public Food GetLatestFood()
    {
      return _dbContext.Foods.OrderByDescending(x => x.FoodId).FirstOrDefault();
    }

    public Food FindById(int id)
    {
      return _dbContext.Foods.AsNoTracking().FirstOrDefault(x => x.spoonacularId == id);
    }

  }
}
