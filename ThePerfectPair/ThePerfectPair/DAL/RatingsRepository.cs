using ThePerfectPair.Models;

namespace ThePerfectPair.DAL
{
  public class RatingsRepository
  {
    private PerfectPairContext _dbContext = new PerfectPairContext();

    public void AddRating(Rating pairRating)
    {
      _dbContext.Ratings.Add(pairRating);
      _dbContext.SaveChanges();
    }
  }
}
