using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using PortfolioDataAccess;

namespace PortfolioServices.Controllers
{
    public class MenuItemsController : ApiController
    {
        private PortfolioCoreBaseEntities db = new PortfolioCoreBaseEntities();

        // GET: api/MenuItems
        [HttpGet]
        public IQueryable<MenuItem> GetAllMenuItems()
        {
            return db.MenuItems;
        }

        // GET: api/MenuItems/5
        [HttpGet]
        public async Task<IHttpActionResult> GetMenuItem(int id)
        {
            MenuItem menuItem = await db.MenuItems.FindAsync(id);
            if (menuItem == null)
            {
                return NotFound();
            }

            return Ok(menuItem);
        }

        // PUT: api/MenuItems/5
        [HttpPut]
        public async Task<IHttpActionResult> PutMenuItem(int id, MenuItem menuItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != menuItem.MenuId)
            {
                return BadRequest();
            }

            db.Entry(menuItem).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/MenuItems
        [HttpPost]
        public async Task<IHttpActionResult> PostMenuItem(MenuItem menuItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.MenuItems.Add(menuItem);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MenuItemExists(menuItem.MenuId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = menuItem.MenuId }, menuItem);
        }

        // DELETE: api/MenuItems/5
        [System.Web.Http.HttpDelete]
        public async Task<IHttpActionResult> DeleteMenuItem(int id)
        {
            MenuItem menuItem = await db.MenuItems.FindAsync(id);
            if (menuItem == null)
            {
                return NotFound();
            }

            db.MenuItems.Remove(menuItem);
            await db.SaveChangesAsync();

            return Ok(menuItem);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MenuItemExists(int id)
        {
            return db.MenuItems.Count(e => e.MenuId == id) > 0;
        }
    }
}