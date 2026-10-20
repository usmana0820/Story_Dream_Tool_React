import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

export default function BlogModal({ article, onClose }) {
  if (!article) return null

  return (
    <div className="modal fade blog-modal show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
      <div className="modal-backdrop fade show" onClick={onClose} />
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <span className="blog-modal-tag">{article.tag}</span>
            <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={onClose} />
          </div>
          <div className="modal-body">
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <Link to={ROUTES.REGISTER} className="btn btn-primary mt-3" onClick={onClose}>
              Start Creating Free →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
