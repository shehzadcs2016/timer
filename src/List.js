import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Icons/SvgIcon";

export default class AlignItemsList extends React.Component {
  render() {
    const { person } = this.props;

    return (
      <div>
        <List className={useStyles.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={person.avatar_url} />
            </ListItemAvatar>
            <ListItemText
              primary={person.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={useStyles.inline}
                    color="textPrimary"
                  >
                    Public_Repos :
                  </Typography>
                  {person.public_repos}
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    className={useStyles.inline}
                    color="textPrimary"
                  >
                    Followers :
                  </Typography>
                  {person.followers}
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    className={useStyles.inline}
                    color="textPrimary"
                  >
                    following :
                  </Typography>
                  {person.following}
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    className={useStyles.inline}
                    color="textPrimary"
                  >
                    created_at :
                  </Typography>
                  {person.created_at}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </div>
    );
  }
}
