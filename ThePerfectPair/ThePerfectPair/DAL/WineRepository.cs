using Microsoft.AspNetCore.Mvc;
using ThePerfectPair.Models;

namespace ThePerfectPair.DAL
{
  public class WineRepository
  {
    private PerfectPairContext _dbContext = new PerfectPairContext();


    public List<Drink> GetAllDrinks()
    {
      return _dbContext.Drinks.ToList();
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
