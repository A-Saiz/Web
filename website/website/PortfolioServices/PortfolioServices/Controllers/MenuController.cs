using PortfolioDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PortfolioServices.Controllers
{
  public class MenuController : ApiController
  {
    /// <summary>
    /// Get all menu items
    /// </summary>
    /// <example>api/menu</example>
    /// <returns>all menu items</returns>
    public IEnumerable<MenuItem> GetMenuItems()
    {
      using (PortfolioCoreBaseEntities entities = new PortfolioCoreBaseEntities())
      {
        return entities.MenuItems.ToList();
      }
    }

    /// <summary>
    /// Get menu item by id
    /// </summary>
    /// <param name="id"></param>
    /// <example>api/menu/{id}</example>
    /// <returns>Menu item</returns>
    public MenuItem GetMenuItem(int id)
    {
      using (PortfolioCoreBaseEntities entities = new PortfolioCoreBaseEntities())
      {
        return entities.MenuItems.FirstOrDefault(e => e.MenuId == id);
      }
    }
  }
}
