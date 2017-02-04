import React from "react";

import Icon from "../icon/Icon";

// Default exports (only one per script)
export default class AccountScreen extends React.Component {

	render() {
		return (
			<div className="create_account_screen">

				<a href="https://github.com/mikepro4/react-signup-form" target="_blank" className="circle_error_link" title="View Source Code">
					<Icon type="circle_error" />
				</a>

				<a href="https://github.com/mikepro4/react-signup-form" target="_blank" className="circle_tick_link" title="View Source Code">
					<Icon type="circle_tick" />
				</a>

				<a href="https://github.com/mikepro4/react-signup-form" target="_blank" className="circle_tick_filled_link" title="View Source Code">
					<Icon type="circle_tick_filled" />
				</a>

				<a href="https://github.com/mikepro4/react-signup-form" target="_blank" className="github_link" title="View Source Code">
					<Icon type="guthub" />
				</a>

			</div>
		);
	}
}