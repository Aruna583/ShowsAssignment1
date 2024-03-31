export const getDate = (date) => {
    const dateString = date
    const dateObject = new Date(dateString);
    const month = dateObject.toLocaleString('default', { month: 'long' });
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    const result =  month + " " +day +", "+ year
    return result
}

export const getDirectImageUrl = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/);
    if (fileId) {
      return `https://drive.google.com/thumbnail?id=${fileId[0]}`;
    }
    return driveUrl;
  };
  