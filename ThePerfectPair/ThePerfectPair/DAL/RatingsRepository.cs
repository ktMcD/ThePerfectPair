using ThePerfectPair.Models;

namespace ThePerfectPair.DAL
{
  public class RatingsRepository
  {
    private PerfectPairContext _dbContext = new PerfectPairContext();

    public Rating AddRating(Rating pairRating)
    {
      _dbContext.Ratings.Add(pairRating);
      _dbContext.SaveChanges();
      return GetLatestRating();
    }

    public Rating GetLatestRating()
    {
      return _dbContext.Ratings.OrderByDescending(x => x.RatingId).FirstOrDefault();
    }
  }
}
