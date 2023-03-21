using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ThePerfectPair.DAL;
using ThePerfectPair.Models;

namespace ThePerfectPair.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class WineController : ControllerBase
  {
    WineRepository repo = new WineRepository();

    [HttpGet()]
    public List<Drink> GetAllDrinks()
    {
      return repo.GetAllDrinks();
    }



  }
}
