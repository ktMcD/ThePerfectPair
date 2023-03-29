using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ThePerfectPair.DAL;
using ThePerfectPair.Models;

namespace ThePerfectPair.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class RatingsController : ControllerBase
  {

    RatingsRepository repo = new RatingsRepository();

    [HttpPost("addrating")]
    public Rating addRating(Rating pairRating)
    {
      Rating newRating = new Rating
      {
        RatingNumber = pairRating.RatingNumber,
        DrinkId = pairRating.DrinkId,
        FoodId = pairRating.FoodId,
        UserComments = pairRating.UserComments
      };
      return repo.AddRating(newRating);

    }

  }
}
