<?php defined('SYSPATH') or die('No direct access allowed.');

/**
 * SwiftRiver Rivers API
 *
 * PHP version 5
 * LICENSE: This source file is subject to the AGPL license
 * that is available through the world-wide-web at the following URI:
 * http://www.gnu.org/licenses/agpl.html
 * @author      Ushahidi Team <team@ushahidi.com>
 * @package     Swiftriver - http://github.com/ushahidi/Swiftriver_v2
 * @subpackage  Libraries
 * @copyright   Ushahidi - http://www.ushahidi.com
 * @license     http://www.gnu.org/licenses/agpl.html GNU Affero General Public License (AGPL)
 */
class SwiftRiver_API_Buckets extends SwiftRiver_API {	
	
/**
	 * Gets and return the bucket with the given id
	 *
	 * @return array
	 */
	public function get_bucket_by_id($bucket_id)
	{
		return $this->get('/buckets/'.$bucket_id);
	}
	
	/**
	 * Gets and returns a list of drops for the bucket with the given id
	 *
	 * @param  bool  $bucket_id ID of the bucket
	 * @param  array $params Parameters for filtering the drops
	 * @return array
	 */
	public function get_bucket_drops($bucket_id, $params = array())
	{
		$path = sprintf("/buckets/%d/drops", $bucket_id);
		return $this->get($path, $params);
	}
	
	/**
	 * Gets and returns the list of users collaborating on the bucket
	 * with the specified id
	 *
	 * @return array
	 */
	public function get_bucket_collaborators($bucket_id)
	{
		$path = sprintf("/buckets/%d/collaborators", $bucket_id);
		return $this->get($path);
	}
}