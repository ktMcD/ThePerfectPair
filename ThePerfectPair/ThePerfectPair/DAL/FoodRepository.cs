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

    public Food AddFood(Food food)
    {

      if (FindById(food.spoonacular) == null)
      {
        _dbContext.Foods.Add(food);
        _dbContext.SaveChanges();
        return GetLatestFood();
      }
      return null;
    }
    public Food GetLatestFood()
    {
      return _dbContext.Foods.OrderByDescending(x => x.FoodId).FirstOrDefault();
    }

    public Food FindById(int id)
    {
      return _dbContext.Foods.AsNoTracking().FirstOrDefault(x => x.spoonacular == id);
    }

  }
}
