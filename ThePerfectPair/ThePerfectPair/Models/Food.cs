using System.ComponentModel.DataAnnotations.Schema;

namespace ThePerfectPair.Models
{
  public class Food
  {
    public int FoodId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int CategoryId { get; set; }
    public Category Category { get; set; }
  }
}
