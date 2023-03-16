using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ThePerfectPair.Models;

namespace ThePerfectPair.DAL
{
  public class PerfectPairContext : DbContext
  {

    public PerfectPairContext()
    {

    }

    public PerfectPairContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Drink> Drinks { get; set; }
    public DbSet<Food> Foods { get; set; }
    //public DbSet<Rating> Ratings { get; set; }

    private static IConfigurationRoot _configuration;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

        _configuration = builder.Build();
        string cnstr = _configuration.GetConnectionString("PairingDb");
        optionsBuilder.UseSqlServer(cnstr);
      }
    }

  }
}
