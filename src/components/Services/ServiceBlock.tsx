import { FC } from 'react';

export interface ServiceBlockProps {
    title: string;
    description: string;
    svgData: {
        width: string;
        height: string;
        viewBox: string;
        path: string;
    }
}

const ServiceBlock: FC<ServiceBlockProps> = ({ title, description, svgData }) => {
    return (
        <div className="bc ek/2 wm/4 df">
            <div className="oe dj ri wh of lf ud e z od sg di ma">
                <div className="fa kc xb eb td pe mb id kd kh fj gj">
                    <svg width={svgData.width} height={svgData.height} viewBox={svgData.viewBox} className="ye">
                        <path d={svgData?.path}></path>
                    </svg>
                </div>
                <h3 className="dh jh zg yj km 2xl:ud-text-2xl hj ua">{title}</h3>
                <p className="eh lh hj ih vg">{description}</p>
                <div>
                  <span className="d f q nn">
                    <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                      <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
                    </svg>
                  </span>
                    <span className="d t u nn">
                    <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)"
                              fill="white"></circle>
                      <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)"
                              fill="white"></circle>
                      <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)"
                              fill="white"></circle>
                      <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)"
                              fill="white"></circle>
                      <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)"
                              fill="white"></circle>
                      <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)"
                              fill="white"></circle>
                      <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)"
                              fill="white"></circle>
                      <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)"
                              fill="white"></circle>
                      <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)"
                              fill="white"></circle>
                      <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)"
                              fill="white"></circle>
                      <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)"
                              fill="white"></circle>
                      <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)"
                              fill="white"></circle>
                    </svg>
                  </span>
                </div>
            </div>
        </div>
    );
}

export default ServiceBlock;