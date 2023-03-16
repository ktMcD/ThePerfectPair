using System.ComponentModel.DataAnnotations.Schema;

namespace ThePerfectPair.Models
{
  public class Rating
  {
    public int RatingId { get; set; }
    public int RatingNumber { get; set; }
    public string? UserComments { get; set; }
    public virtual List<Drink> Drinks { get; set; }
    public virtual List<Food> Foods { get; set; }
  }
}
