import { Box, Button, Grid, Paper, TextField } from '@material-ui/core';
import { DirectionsCar, Search } from '@material-ui/icons';
import { KeyboardDatePicker } from '@material-ui/pickers';
import React, { Component } from 'react';
import GMapComponent from '../Components/GMapComponent';
import PageHeader from '../Components/PageHeader';

class VehicleActivity extends Component {
	state = {
		startDate: null,
		endDate: null,
	}
	render() {
		return <>
			<PageHeader 
      title={"Vehicle Activity"}
       icon={<DirectionsCar></DirectionsCar>}
       links={this.props.menu&& this.props.menu.filter(x=>x.url!=='/place-interactions')}
       ></PageHeader>
			<Paper elevation={0}>
				<Box p={2}>
					<Grid container>
						<Grid item xs={12}>
							<Box p={1}>
								<Grid container spacing={2}>
									<Grid item>
										<TextField variant='outlined' size='small' label='Licence number' type='number'></TextField>
									</Grid>
									<Grid item>
										<KeyboardDatePicker
											showTodayButton
											format="dd, MMM, yyyy"
											label="Start Date"
											color='primary'
											size='small'
											value={this.state.startDate}
											onChange={(v) => this.setState({ startDate: v })}
											inputVariant='outlined'
										/>
									</Grid>
									<Grid item>
										<KeyboardDatePicker
											showTodayButton
											format="dd, MMM, yyyy"
											label="End Date"
											color='primary'
											size='small'
											value={this.state.endDate}
											onChange={(v) => this.setState({ endDate: v })}
											inputVariant='outlined'
										/>
									</Grid>
									<Grid item>
										<Button
											variant='contained'
											color='primary'
											startIcon={<Search></Search>}
										>
											Search
									</Button>
									</Grid>
								</Grid>
							</Box>
						</Grid>
						<Grid item xs={12}>
							<GMapComponent position={{ lat: -34.397, lng: 150.644 }} ></GMapComponent>
						</Grid>
					</Grid>
				</Box>
			</Paper></>
	}
}

export default VehicleActivity;