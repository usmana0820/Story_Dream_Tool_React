import PageHeader from '../../../components/dashboard/PageHeader'

export default function StoryGeneratorPage() {
  return (
    <>
      <PageHeader
        title="AI Story Generator"
        subtitle="Generate complete cartoon stories from a simple prompt"
      />

      <div className="dashboard-card">
        <div className="mb-3">
          <label className="form-label" htmlFor="prompt">Story Prompt</label>
          <textarea
            className="form-control"
            id="prompt"
            rows={4}
            placeholder="Describe your cartoon story idea..."
            defaultValue="A brave child explores a magical forest and learns about friendship and courage."
          />
        </div>
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <label className="form-label">Style</label>
            <select className="form-control">
              <option>Cartoon Adventure</option>
              <option>Fantasy</option>
              <option>Educational</option>
              <option>Sci-Fi</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Episodes</label>
            <input type="number" className="form-control" defaultValue={3} min={1} max={20} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Target Platform</label>
            <select className="form-control">
              <option>YouTube Shorts</option>
              <option>TikTok</option>
              <option>Instagram Reels</option>
            </select>
          </div>
        </div>
        <button type="button" className="btn btn-primary btn-lg">
          <i className="fa fa-magic me-2" />Generate Story
        </button>
      </div>
    </>
  )
}
