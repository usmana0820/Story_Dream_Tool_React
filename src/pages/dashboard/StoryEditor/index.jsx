import { useParams } from 'react-router-dom'
import PageHeader from '../../../components/dashboard/PageHeader'

export default function StoryEditorPage() {
  const { id } = useParams()

  return (
    <>
      <PageHeader
        title={`Story Editor #${id || 'New'}`}
        subtitle="Edit narrative, scenes, and episode structure"
      />

      <div className="dashboard-card">
        <div className="mb-3">
          <label className="form-label" htmlFor="storyTitle">Story Title</label>
          <input type="text" className="form-control" id="storyTitle" defaultValue="The Lost Kingdom" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="storyContent">Story Content</label>
          <textarea className="form-control" id="storyContent" rows={12} defaultValue="Once upon a time in a magical kingdom..." />
        </div>
        <div className="row g-3 mb-3">
          <div className="col-md-4">
            <label className="form-label">Genre</label>
            <select className="form-control">
              <option>Adventure</option>
              <option>Fantasy</option>
              <option>Educational</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Episodes</label>
            <input type="number" className="form-control" defaultValue={5} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Emotion Tone</label>
            <select className="form-control">
              <option>Happy</option>
              <option>Excited</option>
              <option>Calm</option>
            </select>
          </div>
        </div>
        <button type="button" className="btn btn-primary me-2">Save Story</button>
        <button type="button" className="btn btn-outline-secondary">Preview</button>
      </div>
    </>
  )
}
