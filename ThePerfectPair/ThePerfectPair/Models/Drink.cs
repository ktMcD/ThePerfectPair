using System.ComponentModel.DataAnnotations.Schema;

namespace ThePerfectPair.Models
{
  public class Drink
  {
    public int DrinkId { get; set; }
    public string Name { get; set; }
    public int CategoryId { get; set; }
    public virtual Category? Category { get; set; }
  }
}
