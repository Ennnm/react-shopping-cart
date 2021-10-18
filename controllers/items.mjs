export default function initItemsController(db) {
  const index = async (request, response) => {
    try {
      const items = await db.Item.findAll();
      response.send({ items });
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (req, res) => {
    const { name, description, price } = req.body;
    try {
      const newItem = await db.Item.create({ name, description, price });

      res.send('item created');
    }
    catch (error) {
      console.log('error in creation', error);
    }
  };
  return {
    index,
    create,
  };
}
