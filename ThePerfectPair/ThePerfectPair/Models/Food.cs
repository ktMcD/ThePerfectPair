using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ThePerfectPair.Models
{
  public class Food
  {
    public int FoodId { get; set; }
    public int spoonacular { get; set; }
    public string Title { get; set; }

    [StringLength(1000)]
    public string imageUrl { get; set; }

    [StringLength(1000)]
    public string linkUrl { get; set; }

 
  }
}
