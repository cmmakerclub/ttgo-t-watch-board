#pragma onec
bool motion_task_init();
int motion_handle_direction(int mode);
unsigned int motion_handle_stepwalk();
unsigned int stepWalkCount();
void bma423_disable_interrupt();
void bma423_enable_interrupt();
