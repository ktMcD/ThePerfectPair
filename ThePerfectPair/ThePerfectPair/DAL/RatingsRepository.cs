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


    public List<Rating> GetLast10Ratings()
    {
      return _dbContext.Ratings.OrderByDescending(x => x.RatingId).Take(10).ToList();
    }

    public List<Rating> GetRatingByValue(int value)
    {
      return _dbContext.Ratings.Where(x => x.RatingNumber == value).ToList();
    }

  }
}
