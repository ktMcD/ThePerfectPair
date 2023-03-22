using System.ComponentModel.DataAnnotations.Schema;

namespace ThePerfectPair.Models
{
  public class Food
  {
    public int FoodId { get; set; }
    public int spoonacularId { get; set; }
    public string Title { get; set; }
    public string imageUrl { get; set; }
    public string linkUrl { get; set; }

 
  }
}
