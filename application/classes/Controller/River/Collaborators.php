<?php defined('SYSPATH') OR die('No direct access allowed.');

/**
 * River Collaborator Settings Controller
 *
 * PHP version 5
 * LICENSE: This source file is subject to the AGPL license 
 * that is available through the world-wide-web at the following URI:
 * http://www.gnu.org/licenses/agpl.html
 * @author	   Ushahidi Team <team@ushahidi.com> 
 * @package    SwiftRiver - https://github.com/ushahidi/SwiftRiver
 * @category   Controllers
 * @copyright  Ushahidi - http://www.ushahidi.com
 * @license    http://www.gnu.org/licenses/agpl.html GNU Affero General Public License (AGPL)
 */
class Controller_River_Collaborators extends Controller_River_Settings {
	
	/**
	 * @return	void
	 */
	public function action_index()
	{
		$this->template->header->title = $this->river['name'].' ~ '.__('Collaborator Settings');
		$this->template->header->js .= HTML::script("themes/default/media/js/collaborators.js");
		$this->template->content->active = "collaborators";
		$this->template->content->settings_content = View::factory('template/collaborators')
							->bind('fetch_url', $fetch_url)
							->bind('collaborator_list', $collaborators);

		$fetch_url = $this->river_base_url.'/collaborators';		
		$collaborators = json_encode($this->river_service->get_collaborators($this->river['id']));
		
	}
	
}
