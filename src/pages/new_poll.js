import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
// Refrence: https://www.gatsbyjs.com/docs/building-a-contact-form/#sending-form-data
export default function login() {
    return (
        <Layout>
            <Seo title="New Poll" />

            <div>
                <form method="post" action="REPLACE_THIS">
                    <label>
                        Title
                        <input type="text" name="title"/><br />
                    </label>
                    <label>
                        Location
                        <input type="text"name="location"/><br />
                    </label>
                    <label>
                        Description
                        <input type="text"name="description"/><br />
                    </label>
                    <label>
                        Openings per timeslot
                        <input type="text"name="opt"/><br />
                    </label>
                    <label>
                        Number of user votes
                        <input type="text"name="nuv"/><br />
                    </label>
                    <label>
                        Timezone
                        <select name="timezone" id="timezone">
                            <option disabled selected value> -- select an option -- </option>
                            <option value="EDT">Eastern (UTC-05:00)</option>
                            <option value="CDT">Central (UTC-06:00)</option>
                            <option value="MDT">Mountain (UTC-07:00)</option>
                            <option value="PDT">Pacific (UTC-08:00)</option>
                            <option value="ADT">Alaskan (UTC-09:00)</option>
                            <option value="HST">Hawaiian (UTC-10:00)</option>
                        </select>
                    </label>
                    {/* TODO: Link needs to be changed when page is created */}
                    <Link to="/">Cancel</Link>
                    <button type="submit">Create</button>
                </form>
            </div>
        </Layout>
    )
}