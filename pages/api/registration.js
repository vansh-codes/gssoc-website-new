import dbConnect from '../../utils/dbConnect';
import CA from '../../utils/models/caSchema';
import Contributors from '../../utils/models/contributorsSchema';
import Mentor from '../../utils/models/mentorSchema';
import ProjectAdmin from '../../utils/models/projectAdminSchema';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === 'POST') {
    try {
      const { role, ...formData } = req.body;

      let savedData;
      switch (role) {
        case 'CA':
          savedData = await CA.create(formData);
          break;
        case 'Contributor':
          savedData = await Contributors.create(formData);
          break;
        case 'Mentor':
          savedData = await Mentor.create(formData);
          break;
        case 'ProjectAdmin':
          savedData = await ProjectAdmin.create(formData);
          break;
        default:
          return res.status(400).json({ success: false, message: 'Invalid role' });
      }

      return res.status(201).json({ success: true, data: savedData });
    } catch (error) {

      return res.status(400).json({ success: false, error: error.message });
    }
  } else {

    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
