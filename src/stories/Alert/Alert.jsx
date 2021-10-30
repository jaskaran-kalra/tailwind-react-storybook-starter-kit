import PropTypes from 'prop-types';

import './alert.css';

/**
 * Primary UI component for user interaction
 */
export const Alert = ({ heading, description, onClose }) => {
  return (
    <div className="alert-container">
			<div className="alert-icon-container">
				<svg 
          className="w-6 h-6" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
					<path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
				</svg>
			</div>
			<div className="px-6">
				<h5 className="font-semibold">{heading}</h5>
				<p className="text-sm">{description}</p>
			</div>
			<button className="ml-auto" onClick={onClose}>
				<svg 
          className="w-4 h-4" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
					<path 
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
            clipRule="evenodd" />
				</svg>
			</button>
		</div>
  );
};

Alert.propTypes = {
  /**
   * Alert heading
   */
  heading: PropTypes.string,
  /**
   * Alert description
   */
  description: PropTypes.string,
  /**
   * Optional on close handler
   */
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  text: null,
  size: 'medium',
  onClose: undefined,
};
