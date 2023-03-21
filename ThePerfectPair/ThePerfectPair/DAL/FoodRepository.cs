using Microsoft.AspNetCore.Mvc;
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
      _dbContext.Foods.Add(food);
      _dbContext.SaveChanges();
      return GetLatestFood();
    }

    public Food GetLatestFood()
    {
      return _dbContext.Foods.OrderByDescending(x => x.FoodId).FirstOrDefault();
    }

  }
}
