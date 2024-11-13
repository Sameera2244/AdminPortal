// pages/api/proxy.js
export default async function handler(req, res) {
    try {
      const response = await fetch('http://is1:8000/sap/opu/odata/sap/ZVENDOR_DETAILS_SRV_01/VENDOR_DETAILSET?$filter=IndKey%20eq%20%27ZISU%27', {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + Buffer.from('Nasir:Nasir@123').toString('base64'),
          'Content-Type': 'application/xml',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const xmlText = await response.text();
      res.status(200).send(xmlText);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
  }
  