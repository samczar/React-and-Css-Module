import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-1.svg'
import {
	ServiceP,
	ServicesWrapper,
	ServicesCard,
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	ServicesIcon,
} from './ServicesElements'

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Reduce Expenses</ServicesH2>
					<ServiceP>
						We help reduce your fees and increase your overall revenue.
					</ServiceP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>Virtual Offices</ServicesH2>
					<ServiceP>
						You can access our platform anywhere in the world. Just for the
						latter
					</ServiceP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Premium Benefit</ServicesH2>
					<ServiceP>
						Unlock our special membership card that returns cash back.
					</ServiceP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	)
}

export default Services
