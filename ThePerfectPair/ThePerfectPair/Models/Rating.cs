using System.ComponentModel.DataAnnotations.Schema;

namespace ThePerfectPair.Models
{
  public class Rating
  {
    public int RatingId { get; set; }
    public int RatingNumber { get; set; }
    public string? UserComments { get; set; }
    public int DrinkId { get; set; }
    public Drink Drink { get; set; }
    public int FoodId { get; set; }
    public Food Food { get; set; }
  }
}
