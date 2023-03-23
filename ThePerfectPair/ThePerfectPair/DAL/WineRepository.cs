using Microsoft.AspNetCore.Mvc;
using System.Linq;
using ThePerfectPair.Models;

namespace ThePerfectPair.DAL
{
  public class WineRepository
  {
    private PerfectPairContext _dbContext = new PerfectPairContext();


    public int GetMaxDrinkIN()
    {
      return _dbContext.Drinks.ToList().Count;
    }

    public Drink GetRandomDrink()
    {
      int maxDrinkId = _dbContext.Drinks.ToList().MaxBy(x => x.DrinkId).DrinkId;
      int minDrinkId = _dbContext.Drinks.ToList().MinBy(x => x.DrinkId).DrinkId;

      Random rnd = new Random();
      int randomNumber = rnd.Next(minDrinkId, maxDrinkId);

      while (_dbContext.Drinks.Where(x => x.DrinkId == randomNumber) == null)
      {
        randomNumber = rnd.Next(minDrinkId, maxDrinkId);
      }

      Drink myDrink =_dbContext.Drinks.Where(x => x.DrinkId == randomNumber).FirstOrDefault();
      myDrink.Category = GetDrinksCategory(myDrink.CategoryId);
      return myDrink;
    }

    public Category GetDrinksCategory(int id)
    {
      return _dbContext.Categories.Where(x => x.CategoryId == id).FirstOrDefault();
    }

    public Drink AddDrink(Drink drink)
    {
      _dbContext.Drinks.Add(drink);
      _dbContext.SaveChanges();
      return GetLatestDrink();
    }

    public Drink GetLatestDrink()
    {
      return _dbContext.Drinks.OrderByDescending(x => x.DrinkId).FirstOrDefault();
    }

  }
}
