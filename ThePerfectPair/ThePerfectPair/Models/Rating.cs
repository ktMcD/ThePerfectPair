using System.ComponentModel.DataAnnotations.Schema;

namespace ThePerfectPair.Models
{
  public class Rating
  {
    public int RatingId { get; set; }
    public int RatingNumber { get; set; }
    public string? UserComments { get; set; }
    public int DrinkId { get; set; }
    //public virtual Drink Drink { get; set; }
    public int FoodId { get; set; }
    //public virtual Food Food { get; set; }
  }
}
