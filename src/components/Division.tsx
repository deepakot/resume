import React, { FunctionComponent } from 'react';

interface OwnProps {
	startYear: string;
	endYear?: string;
	position: string;
	company: string;
	platform1?: string;
	platform2?: string;
	platform3?: string;
	platform4?: string;
	platform5?: string;
	platform6?: string;
	platform7?: string;
	platform8?: string;
	logo1?: string;
	logo2?: string;
	site1?: string;
	site2?: string;

}

const Division: FunctionComponent<OwnProps> = props => {
	return (
		<div className={'division'}>
			<div className={'division-header'}>
				<div className={'division-main-date'}>
					{props.startYear} - {props.endYear}
				</div>
				<div className={'division-main-position'}>
					<span>{props.position}</span>
					<span>{props.company}</span>
				</div>
				<div className={'division-sub-position'} style={{ display: props.platform1 ? 'flex' : 'none', alignItems: 'end' }}>
					<span style={{ alignItems: 'center' }}>
						{<a target={'_blank'} href={props.site1} style={{ display: props.logo1 ? 'initial' : 'none' }}>
							<img src={require('../images/'+(props.logo1 ? props.logo1 : 'delogo')+'.png')}
							style={{ width: 24, marginRight: 20 }} />
						</a>}
						{<a target={'_blank'} href={props.platform1}>
							<img src={require('../images/android.png')} style={{ width: 16 }} />
						</a>}
						{<a target={'_blank'} href={props.platform2} 
						style={{ display: props.platform2 ? 'initial' : 'none', paddingLeft: 10 }}>
						<img src={require('../images/ios.png')} style={{ width: 16 }} />
						</a>}
					</span>
					<span style={{ display: props.platform3 ? 'flex' : 'none', alignItems: 'center' }}>
						{<a target={'_blank'} href={props.site2}>
							<img src={require('../images/'+(props.logo2 ? props.logo2 : 'delogo')+'.png')}
							style={{ width: 24, marginRight: 20 }} />
						</a>}
						{<a target={'_blank'} href={props.platform3}>
							<img src={require('../images/android.png')} style={{ width: 16 }} />
						</a>}
						{<a target={'_blank'} href={props.platform4} style={{ marginLeft: 10 }}>
						<img src={require('../images/ios.png')} style={{ width: 16 }} />
						</a>}
					</span>
					<span style={{ display: props.platform5 ? 'flex' : 'none' }}>
						{<a target={'_blank'} href={props.platform5}>
							<img src={require('../images/hitmovie.png')} style={{ width: 16 }} />
						</a>}
						{<a target={'_blank'} href={props.platform6} style={{ marginLeft: 10 }}>
						<img src={require('../images/androidtv2.png')} style={{ width: 52 }} />
						</a>}
						{<a target={'_blank'} href={props.platform7} style={{ marginLeft: 10 }}>
						<img src={require('../images/appletv.png')} style={{ width: 16 }} />
						</a>}
						{<a target={'_blank'} href={props.platform8} style={{ marginLeft: 10 }}>
						<img src={require('../images/firetv.png')} style={{ width: 20 }} />
						</a>}
					</span>
				</div>
			</div>
			{props.children}
			<p className={'division-content'} />
		</div>
	);
};

export default Division;
