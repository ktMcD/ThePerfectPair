namespace ThePerfectPair.Models
{
  public class Category
  {
    public int CategoryId { get; set; }
    public string Name { get; set; }
    public virtual List<Drink> Drinks { get; set; }
    public virtual List<Food> Foods { get; set; }
  }
}
