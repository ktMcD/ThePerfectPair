using System.ComponentModel.DataAnnotations.Schema;

namespace ThePerfectPair.Models
{
  public class Drink
  {
    public int DrinkId { get; set; }
    public int? CategoryId { get; set; }
    public Category? Category { get; set; }
    public string Name { get; set; }
  }
}
