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
    public class AboutPageImagesController : ApiController
    {
        private PortfolioCoreBaseEntities db = new PortfolioCoreBaseEntities();

        // GET: api/AboutPageImages
        public IQueryable<AboutPageImage> GetAboutPageImages()
        {
            return db.AboutPageImages;
        }

        // GET: api/AboutPageImages/5
        [ResponseType(typeof(AboutPageImage))]
        public async Task<IHttpActionResult> GetAboutPageImage(int id)
        {
            AboutPageImage aboutPageImage = await db.AboutPageImages.FindAsync(id);
            if (aboutPageImage == null)
            {
                return NotFound();
            }

            return Ok(aboutPageImage);
        }

        // PUT: api/AboutPageImages/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAboutPageImage(int id, AboutPageImage aboutPageImage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aboutPageImage.ImageId)
            {
                return BadRequest();
            }

            db.Entry(aboutPageImage).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AboutPageImageExists(id))
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

        // POST: api/AboutPageImages
        [ResponseType(typeof(AboutPageImage))]
        public async Task<IHttpActionResult> PostAboutPageImage(AboutPageImage aboutPageImage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AboutPageImages.Add(aboutPageImage);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AboutPageImageExists(aboutPageImage.ImageId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = aboutPageImage.ImageId }, aboutPageImage);
        }

        // DELETE: api/AboutPageImages/5
        [ResponseType(typeof(AboutPageImage))]
        public async Task<IHttpActionResult> DeleteAboutPageImage(int id)
        {
            AboutPageImage aboutPageImage = await db.AboutPageImages.FindAsync(id);
            if (aboutPageImage == null)
            {
                return NotFound();
            }

            db.AboutPageImages.Remove(aboutPageImage);
            await db.SaveChangesAsync();

            return Ok(aboutPageImage);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AboutPageImageExists(int id)
        {
            return db.AboutPageImages.Count(e => e.ImageId == id) > 0;
        }
    }
}