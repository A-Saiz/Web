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
using System.Web.Mvc;
using PortfolioDataAccess;

namespace PortfolioServices.Controllers
{
    public class HereSettingsController : ApiController
    {
        private PortfolioCoreBaseEntities db = new PortfolioCoreBaseEntities();

        // GET: api/HereSettings
        [System.Web.Http.HttpGet]
        [RequireHttps]
        public IQueryable<HereSetting> GetHereSettings()
        {
            return db.HereSettings;
        }

        // GET: api/HereSettings/5
        [System.Web.Http.HttpGet]
        [RequireHttps]
        public async Task<IHttpActionResult> GetHereSetting(int id)
        {
            HereSetting hereSetting = await db.HereSettings.FindAsync(id);
            if (hereSetting == null)
            {
                return NotFound();
            }

            return Ok(hereSetting);
        }

        // PUT: api/HereSettings/5
        [System.Web.Http.HttpPut]
        [RequireHttps]
        public async Task<IHttpActionResult> PutHereSetting(int id, HereSetting hereSetting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != hereSetting.SettingsId)
            {
                return BadRequest();
            }

            db.Entry(hereSetting).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HereSettingExists(id))
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

        // POST: api/HereSettings
        [System.Web.Http.HttpPost]
        [RequireHttps]
        public async Task<IHttpActionResult> PostHereSetting(HereSetting hereSetting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.HereSettings.Add(hereSetting);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = hereSetting.SettingsId }, hereSetting);
        }

        // DELETE: api/HereSettings/5
        [System.Web.Http.HttpDelete]
        [RequireHttps]
        public async Task<IHttpActionResult> DeleteHereSetting(int id)
        {
            HereSetting hereSetting = await db.HereSettings.FindAsync(id);
            if (hereSetting == null)
            {
                return NotFound();
            }

            db.HereSettings.Remove(hereSetting);
            await db.SaveChangesAsync();

            return Ok(hereSetting);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HereSettingExists(int id)
        {
            return db.HereSettings.Count(e => e.SettingsId == id) > 0;
        }
    }
}