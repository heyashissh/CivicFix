import { useState } from "react"

function CreateComplaint() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [priority, setPriority] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [image, setImage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !title.trim() ||
      !category ||
      !description.trim() ||
      !location.trim() ||
      !priority
    ) {
      setError("Please fill in all required fields.")
      setSubmitted(false)
      return
    }

    const complaintData = {
      id: Date.now(),
      title,
      category,
      description,
      location,
      priority,
    }
    const existingComplaints = 
    JSON.parse(localStorage.getItem("complaints")) || []

    const updatedComplaints = [...existingComplaints, complaintData]
    localStorage.setItem("complaints", JSON.stringify(updatedComplaints))

    console.log(complaintData)
    setSubmitted(true)
    setError("")
    setTitle("")
    setCategory("")
    setDescription("")
    setLocation("")
    setPriority("")
  }
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        {/* Page Header */}
        <h1 className="text-2xl font-bold text-slate-900">
          Report an Issue
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Help improve your community by reporting a civic issue.
        </p>

        {/* Form Card */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
                <p className="text-sm font-medium text-red-700">
                  {error}
                </p>
              </div>
            )}
            {submitted && (
              <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
                <h3 className="font-semibold text-green-800">
                  Complaint Submitted successfully!
                </h3>
                <p className="mt-1 text-sm text-green-700">
                  Your complaint has been recorded.
                </p>
              </div>
            )}
            {/* Complaint Title */}
            <div>
              <label
                htmlFor="title"
                className="text-sm font-medium text-slate-700"
              >
                Complaint Title
              </label>

              <input
                id="title"
                type="text"
                placeholder="e.g. Pothole on Main Road"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />

              {/* Temporary testing */}
              <p className="mt-2 text-sm text-slate-500">
                Current title: {title}
              </p>
            </div>

            {/* Category */}
            <div className="mt-6">
              <label
                htmlFor="category"
                className="text-sm font-medium text-slate-700"
              >
                Category
              </label>
              <p className="mt-2 text-sm text-slate-500">
                Current category: {category}
              </p>

              <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              >
                <option value="">Select a category</option>
                <option value="road">Road Damage</option>
                <option value="streetlight">Streetlight</option>
                <option value="waste">Waste Management</option>
                <option value="water">Water Supply</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label
                htmlFor="description"
                className="text-sm font-medium text-slate-700"
              >
                Description
              </label>

              <textarea
                id="description"
                rows="5"
                placeholder="Describe the issue in detail..."
                className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            {/* Location */}
            <div className="mt-6">
              <label
                htmlFor="location"
                className="text-sm font-medium text-slate-700"
              >
                Location
              </label>

              <input
                id="location"
                type="text"
                placeholder="e.g. Main Road, Sector 12"
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
              <p className="mt-2 text-sm text-slate-500">
                Current location: {location}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Enter the location where the issue was reported.
              </p>
            </div>

            {/* Priority */}
            <div className="mt-6">
              <p className="text-sm font-medium text-slate-700">
                Priority
              </p>

              <div className="mt-3 flex flex-wrap gap-4">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="priority"
                    value="low"
                    checked={priority === "low"}
                    onChange={(event) => setPriority(event.target.value)}
                    className="h-4 w-4"
                  />

                  <span className="text-sm text-slate-600">
                    Low
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="priority"
                    value="medium"
                    checked={priority === "medium"}
                    onChange={(event) => setPriority(event.target.value)}
                    className="h-4 w-4"
                  />

                  <span className="text-sm text-slate-600">
                    Medium
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="priority"
                    value="high"
                    checked={priority === "high"}
                    onChange={(event) => setPriority(event.target.value)}
                    className="h-4 w-4"
                  />

                  <span className="text-sm text-slate-600">
                    High
                  </span>
                  <p className="mt-2 text-sm text-slate-500">
                    Current priority: {priority}
                  </p>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <label className="text-sm font-medium text-slate-700">
                Upload Evidence Image
              </label>

              <div className="mt-2 rounded-lg border-2 border-dashed border-slate-300 px-6 py-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-2xl">
                    📷
                  </div>
                  <h3 className="mt-3 font-medium text-slate-800">
                    Upload an image
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Add a photo of the civic issue as evidence.
                  </p>
                  <label className="mt-4 cursor-pointer rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
                    Choose Image
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      className="hidden"
                      onChange={(event) => setImage(event.target.files[0])}
                    />
                  </label>
                  {image && (
                    <div className="mt-4">
                      <img
                        src={URL.createObjectURL(image)}
                        alt="Selected complaint"
                        className="mx-auto max-h-64 rounded-lg object-contain"
                      />

                      <p className="mt-2 text-center text-sm font-medium text-green-700">
                        Selected: {image.name}
                      </p>

                      <button
                        type="button"
                        onClick={() => setImage(null)}
                        className="mt-3 block mx-auto text-sm font-medium text-red-600 hover:text-red-700"
                      >
                        Remove Image
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Submit Complaint
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateComplaint