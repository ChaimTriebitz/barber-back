module.exports = {
   serve
}

const PORT = process.env.PORT || 5000;

async function serve(app) {
   try {
      await app.listen(PORT)
      console.log(`Server running on port ${PORT}`);
   } catch (error) {
      console.log(error);
   }
}