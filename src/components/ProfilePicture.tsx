import React, { FunctionComponent } from 'react';

interface OwnProps {
	imgUrl: string;
}

const ProfilePicture: FunctionComponent<OwnProps> = ({ imgUrl }) => {
	return (
		<div className={'info-picture'}>
			<div className={'frame'}>
				<div className={'photo-wrapper'}>
					<img className="photo" src={require('../deepak.png')} style={{ marginLeft: 10, marginTop: -5 }} />
				</div>
			</div>
		</div>
	);
};

export default ProfilePicture;
