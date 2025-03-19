import React from 'react'

const GenerateID = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="techTrack">Tech Track:</label>
      <select name="techTrack" id="techTrack">
        <option value="Front-End Programming">Front-End Programming</option>
        <option value="Back-End Programming">Back-End Programming</option>
        <option value="UI/UX Design">UI/UX Design</option>
        <option value="Graphic Design">Graphic Design</option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="Data Analysis">Data Analysis</option>
        <option value="Data Science & Machine Learning">Data Science & Machine Learning</option>
        <option value="CMS-Based Web Design">CMS-Based Web Design</option>
        <option value="Mobile App Development">Mobile App Development</option>
        <option value="Devops">Devops</option>
        <option value="Artificial Intelligence">Artificial Intelligence</option>
        <option value="Foundational Computer Training">Foundational Computer Training</option>
        <option value="Cyber Security">Cyber Security</option>
        <option value="Computer Networking">Computer Networking</option>
      </select>
      <label htmlFor="date">Start Date:</label>
      <input type="date" name="startDate" id="startDate" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default GenerateID